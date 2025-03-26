import cors from "cors";

const corsOptions = {
  origin: "https://task-manager-frontend-iwtj.onrender.com",
};

const initializeCors = () => cors(corsOptions);

export default initializeCors;
