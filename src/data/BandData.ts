import { CustomError } from "../business/errors/CustomError";
import Band, { FindByIdOrNameResponse } from "../model/Band";
import BaseDatabase from "./BaseDatabase";

export default class BandData extends BaseDatabase {
  insertBand = async (band: Band) => {
    try {
      await BandData.connection("lama_bands").insert(band);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
  selectByIdOrName = async (
    id: string,
    name: string
  ): Promise<FindByIdOrNameResponse> => {
    try {
      let result: FindByIdOrNameResponse[] = [];
      if (id) {
        result = await BandData.connection("lama_bands")
          .select("*")
          .where("id", "=", id);
      } else {
        result = await BandData.connection("lama_bands")
          .select("*")
          .where("name", "LIKE", `%${name}%`);
      }
      if (
        result.length === 0
      ) {
        throw new CustomError(404, "Banda não encontrada")
      }
      const band: FindByIdOrNameResponse = {
        id: result[0]?.id,
        name: result[0]?.name,
        music_genre: result[0]?.music_genre,
        responsible: result[0]?.responsible,
      };
      return band;
    } catch (error: any) {
      throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
    }
  };
}
