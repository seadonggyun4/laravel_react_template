import {apiClient} from "@/shared/api";

export const useMenu = async () => {
        const { data } =  await apiClient('/menu.json');
        const sortMenu = data.menu.sort((a, b) => a.sort - b.sort);
        console.log(sortMenu.);
}
