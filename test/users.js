
const users = artifacts.require('users');

contract('users', () => {
    it('Should deploy properly', async () => {
        const userContract = await users.deployed();
        assert(userContract.address !== '')
    });
    it('Should set new User Successfully', async () => {
        const userContract = await users.deployed();
        await userContract.setnewUser("KittoChan","neko@ne.com","MYPASSWORDTEST",userContract.address)
        const OurUser = await userContract.getTheUser(userContract.address)
       // console.log(OurUser)
        assert(OurUser[0] === 'KittoChan' && OurUser[1] === 'neko@ne.com')
    });
    it('Should Check for User Status', async () => {
        const userContract = await users.deployed();
        await userContract.setnewUser("Rusian-Kun","Ruso@ne.com","ThePASSWORDTEST",userContract.address)
        const status = await userContract.UserAddedorNot();
        //console.log(status);
        assert(status[0] == false && status[1] === 'User Already Exists')
    })
    it('Should Check if Password is correct', async()=>{
        const userContract = await users.deployed();
        const result = await userContract.checkPassword("MYPASSWORDTEST",userContract.address);
        assert(result[0] === true)
    })
    it('Would be able to Store a File with user Info', async()=>{
        const userContract = await users.deployed();
        await userContract.HashStore(userContract.address,"O08XAnTFLTFLTADVQSzEWGII5WItL", "CuteCat", "svg")
        const HashReturn = await userContract.HashSetReturn(userContract.address)
        assert(HashReturn[0].FileName === 'CuteCat'&& HashReturn[0].FileHash === 'O08XAnTFLTFLTADVQSzEWGII5WItL' )
    })
})