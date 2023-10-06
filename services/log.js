async function logAction(
    type,
    description,
  ) {
    return await LogModel.create({
      type,
      description,
    });
  }