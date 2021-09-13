import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_URL,
};

class Api {
  constructor(config = defaultConfig) {
    this.config = config;
    this.instance = axios.create(config);
  }

  async get(path) {
    try {
      return this.instance.get(`/${path}`);
    } catch (e) {
      console.log(e);
    }
  }
}

class SpeciesApi extends Api {
  constructor(speciesConfig) {
    super();
    this.speciesConfig = speciesConfig;
  }

  async getSingle(id) {
    return super.get(`${this.speciesConfig.path}/${id}`);
  }
}

class FilmsApi extends Api {
  constructor(filmsConfig) {
    super();
    this.filmsConfig = filmsConfig;
  }

  async getSingle(id) {
    return super.get(`${this.filmsConfig.path}/${id}`);
  }
}

class StarshipsApi extends Api {
  constructor(starshipsConfig) {
    super();
    this.starshipsConfig = starshipsConfig;
  }

  async getSingle(id) {
    return super.get(`${this.starshipsConfig.path}/${id}`);
  }
}

class PeopleApi extends Api {
  constructor(peopleConfig) {
    super();
    this.peopleConfig = peopleConfig;
  }

  getAll = async (page = 1) => {
    return super.get(`${this.peopleConfig.path}/?page=${page}`);
  };

  handleInnerRequest = async ({ data = [], api }) => {
    if (!data.length) {
      return null;
    }

    const handleMap = item => {
      const splintedItem = item.split('/');

      return splintedItem[splintedItem.length - 2];
    };

    const idsArray = data.map(handleMap);

    const response =
      (await Promise.allSettled(
        idsArray.map(async item => api.getSingle(item))
      )) || [];

    return response
      .filter(({ status }) => status === 'fulfilled')
      .map(({ value }) => value?.data);
  };

  async getSingle(id) {
    const speciesApi = new SpeciesApi({ path: 'species' });
    const starshipsApi = new StarshipsApi({ path: 'starships' });
    const filmsApi = new FilmsApi({ path: 'films' });

    try {
      const { data, ...restData } = await super.get(
        `${this.peopleConfig.path}/${id}`
      );

      if (data) {
        const films = await this.handleInnerRequest({
          data: data?.films,
          api: filmsApi,
        });
        const starships = await this.handleInnerRequest({
          data: data?.starships,
          api: starshipsApi,
        });
        const species = await this.handleInnerRequest({
          data: data?.species,
          api: speciesApi,
        });

        return {
          data: {
            ...data,
            films,
            starships,
            species,
          },
          ...restData,
        };
      }

      console.log({
        data,
        ...restData,
      });

      return {
        data,
        ...restData,
      };
    } catch (e) {
      console.log(e);
      return {
        data: { error: 'something went wrong' },
      };

    }
  }
}

export const currentApi = new PeopleApi({ path: 'people' });
