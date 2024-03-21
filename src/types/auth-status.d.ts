type ErrorState = {
    path: string;
    message: string;
};

export type AuthStatusType =
    | {
          status: 'success';
          message: string;
      }
    | {
          status: 'error';
          message: string;
          errors?: ErrorState[];
      }
    | null;
