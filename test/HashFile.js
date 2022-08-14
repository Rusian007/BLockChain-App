
const HashFile = artifacts.require('HashFile');

contract('HashFile',()=>{
    it('Should Store A Hash Obj Properly :)', async()=>{
        const HashFileContract = await HashFile.deployed();
        await HashFileContract.store("O08XAnMyO08XADVQSzElggX3TdRnMyWGI5WItL1hgpIhWGI5WItL","CatPic", "jpg");
        await HashFileContract.store("O08XAnMyO08XADVQSzEWGI5WItL1hgpIhWGI5WItL","DogPic", "png");
        let HashFileObjArray = await HashFileContract.retrieve();
       // console.log(HashFileObjArray)
        assert(HashFileObjArray[0].FileName === 'CatPic' && HashFileObjArray[1].FileType === 'png')
    })
})
