


export const validations = (format:any) => {
    // Verifica si todos los campos tienen un valor no vacío
    const isValid = Object.values(format).every(
        (value) => value !== null && value !== undefined && value.toString().trim() !== ""
    );

    console.log(isValid ? "lleno" : "vacío");
    return isValid;
};
