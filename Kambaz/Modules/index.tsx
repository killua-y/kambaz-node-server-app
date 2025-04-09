const updateModuleHandler = async (module: any) => {
  try {
    const updatedModule = await modulesClient.updateModule(module);
    dispatch(updateModule(updatedModule));
  } catch (error) {
    console.error("Error updating module:", error);
    // Optionally show an error message to the user
  }
}; 