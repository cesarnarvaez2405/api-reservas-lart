import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        return await mongoose.connect(
          `mongodb://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.HOST_DB}/${process.env.NAME_DB}?authSource=admin`,
        );
      } catch (error) {
        console.error('Error en la conexion de MongoDB', error);
        throw error; //
      }
    },
  },
];
