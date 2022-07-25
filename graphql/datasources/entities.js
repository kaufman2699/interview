const { RESTDataSource } = require('apollo-datasource-rest');

class EntitiesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/';
  }

  async getEntities(term) {
    return this.get('entities', { term });
  }
}

exports = { EntitiesAPI };