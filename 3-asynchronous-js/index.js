const fs = require('fs');
const superagent = require('superagent');

// callback
/**
 * fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
 *   console.log(`Breed: ${data}`);
 *
 *   superagent
 *     .get(`https://dog.ceo/api/breed/${data}/images/random`)
 *     .end((err, res) => {
 *       if (err) return console.log(err.message);
 *
 *       console.log(res.body);
 *
 *       fs.writeFile(`${__dirname}/dog-img.txt`, res.body.message, () => {
 *         console.log(`Random dog image saved to file`);
 *       });
 *     });
 * });
 */

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

// promise
/**
 * readFilePro(`${__dirname}/dog.txt`)
 *   .then((data) => {
 *     console.log(`Breed: ${data}`);
 *     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
 *   })
 *   .then((res) => {
 *     console.log(res.body);
 *     return writeFilePro(`${__dirname}/dog-img.txt`, res.data.message);
 *   })
 *   .then(() => {
 *     console.log(`Random dog image saved to file`);
 *   })
 *   .catch((err) => {
 *     console.log(err);
 *   });
 *
 */

// async/await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body);

    await writeFilePro(`${__dirname}/dog-img.txt`, res.data.message);
    console.log(`Random dog image saved to file`);
  } catch (err) {
    // console.log(err);
    throw err;
  }
  return '2: READY';
};
// getDogPic();

/**
 * console.log('1: will get dog pics');
 * getDogPic()
 *   .then((x) => {
 *     console.log(x);
 *     console.log('3: done getting dog pics');
 *   })
 *   .catch((err) => {
 *     console.log('ERROR');
 *   });
 */

(async () => {
  try {
    console.log('1: will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('3: done getting dog pics');
  } catch (error) {
    console.log('ERROR');
  }
})();
