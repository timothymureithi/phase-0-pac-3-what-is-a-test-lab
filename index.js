const name = "Susan";
const height = 37;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

describe("what-is-a-test", () => {
    describe("Name", () => {
      it('returns "Susan"', () => {
        expect(name).toEqual("Susan");
      });
    });

      
        describe("Height", () => {
          it("is less than 40", () => {
            expect(height).toBeLessThan(40);
          });
        });
})
console.log(message);


