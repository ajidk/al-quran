/* eslint-disable class-methods-use-this */
import { equran } from '../configs/server';

class SurahDataService {
  getSurah() {
    // return http.get('/surah');
    return equran.get('/surat');
  }

  get(surah) {
    // return http.get(`/surah/${surah}`);
    // return quranench.get(`/indonesian_sabiq/${surah}`);
    return equran.get(`/surat/${surah}`);
  }
}

export default new SurahDataService();
