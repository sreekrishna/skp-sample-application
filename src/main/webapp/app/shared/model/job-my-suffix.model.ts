import { ITaskMySuffix } from 'app/shared/model/task-my-suffix.model';

export interface IJobMySuffix {
  id?: number;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  tasks?: ITaskMySuffix[];
  employeeId?: number;
}

export class JobMySuffix implements IJobMySuffix {
  constructor(
    public id?: number,
    public jobTitle?: string,
    public minSalary?: number,
    public maxSalary?: number,
    public tasks?: ITaskMySuffix[],
    public employeeId?: number
  ) {}
}
