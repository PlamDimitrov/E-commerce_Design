export const imageProcesses = {
  convertToBase64: (objects) => {
    objects.forEach(o => {
      if (o.image != null) {
        o.image = `data:image/png;base64, ${o.image}`
      }
    })
    return objects;
  }
}