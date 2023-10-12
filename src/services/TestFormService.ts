import { IForm } from "@/services/TestFormService.dto";
import { axiosInstance } from "@/utils/axiosInstance";

export class TestFormService {
  static async sendTestForm(form:IForm){
    try {
      const response = await axiosInstance.post('/form', form);
      return response.status == 200 || response.status == 201;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
