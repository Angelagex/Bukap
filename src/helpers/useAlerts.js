import Swal from "sweetalert2";

export const useAlerts = () => {

    const TitleAlert = () => {
        return Swal.fire({
          title: "Error",
          text: "El nombre de tu libro debe contener entre 1 y 100 carácteres",
          allowOutsideClick: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
      };
      
      const DescriptionAlert = () => {
        return Swal.fire({
          title: "Error",
          text: "La descripción de tu libro debe contener entre 1 y 800 carácteres",
          allowOutsideClick: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
      };
      
      
      const PagesAlert = () => {
        return Swal.fire({
          title: "Error",
          text: "El numero de páginas de tu libro debe ser un valor de tipo entero mayor que cero",
          allowOutsideClick: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
      };
      
      const Success = () => {
          return Swal.fire({
            title: "¡Enhorabuena!",
            text: "Tu libro ha sido correctamente guardado",
            allowOutsideClick: true,
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          });
        };
      
    return [TitleAlert, DescriptionAlert, PagesAlert, Success]
}