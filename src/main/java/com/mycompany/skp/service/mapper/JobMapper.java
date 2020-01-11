package com.mycompany.skp.service.mapper;

import com.mycompany.skp.domain.*;
import com.mycompany.skp.service.dto.JobDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Job} and its DTO {@link JobDTO}.
 */
@Mapper(componentModel = "spring", uses = {TaskMapper.class, EmployeeMapper.class})
public interface JobMapper extends EntityMapper<JobDTO, Job> {

    @Mapping(source = "employee.id", target = "employeeId")
    JobDTO toDto(Job job);

    @Mapping(target = "removeTask", ignore = true)
    @Mapping(source = "employeeId", target = "employee")
    Job toEntity(JobDTO jobDTO);

    default Job fromId(Long id) {
        if (id == null) {
            return null;
        }
        Job job = new Job();
        job.setId(id);
        return job;
    }
}
