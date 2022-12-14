import {environment} from "../../../environments/environment";

const BASE_URL = environment.API_URL;

export class ApiUrls {

  //User API urls
  static readonly LOGIN = `${BASE_URL}/login`;
  static readonly REGISTER = `${BASE_URL}/register`;
  static readonly LOGOUT = `${BASE_URL}/logout`;
  static readonly PROFILE = `${BASE_URL}/profile`;
  static readonly PROFILE_UPDATE = `${BASE_URL}/profile/update`;
  static readonly PROFILE_DELETE = `${BASE_URL}/profile/delete`;

  //Goals API urls
  static readonly GOALS = `${BASE_URL}/goals`;
  static readonly GOAL_ADD = `${BASE_URL}/goals/add`;
  static readonly GOAL_UPDATE = `${BASE_URL}/goals/update`;
  static readonly GOAL_DELETE = `${BASE_URL}/goals/delete`;

  //Tasks API urls
  static readonly TASKS = `${BASE_URL}/tasks`;
  static readonly TASK_ADD = `${BASE_URL}/tasks/add`;
  static readonly TASK_UPDATE = `${BASE_URL}/tasks/update`;
  static readonly TASK_DELETE = `${BASE_URL}/tasks/delete`;

}
