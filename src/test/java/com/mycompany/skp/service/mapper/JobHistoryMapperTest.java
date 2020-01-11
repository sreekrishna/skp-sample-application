package com.mycompany.skp.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class JobHistoryMapperTest {

    private JobHistoryMapper jobHistoryMapper;

    @BeforeEach
    public void setUp() {
        jobHistoryMapper = new JobHistoryMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(jobHistoryMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(jobHistoryMapper.fromId(null)).isNull();
    }
}
