export const healthCheck = (req, res) => {
  res.json({
    status: "ok",
    message: "latam_crm API is running"
  });
};
