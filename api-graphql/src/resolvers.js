const cars = [
    { id: '1', make: 'Toyota', model: 'Corolla', year: 2021 },
    { id: '2', make: 'Honda', model: 'Civic', year: 2022 },
    { id: '3', make: 'Ford', model: 'Mustang', year: 2020 },
  ];

const resolvers = {
    Query: {
        cars: () => cars
    }
};

module.exports = resolvers;