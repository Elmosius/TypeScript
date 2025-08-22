import Swal from "sweetalert2";

const alertSuccess = async (message: string) => {
  return Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
  });
};

const alertError = async (message: string) => {
  return Swal.fire({
    icon: "error",
    title: "Oops",
    text: message,
  });
};

const alertConfirm = async (message: string) => {
  const result = await Swal.fire({
    icon: "question",
    title: "Are you sure?",
    text: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });

  return result.isConfirmed;
};

export { alertSuccess, alertError, alertConfirm };
