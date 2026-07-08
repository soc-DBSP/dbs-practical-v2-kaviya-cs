const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.create = function create(code, name, credit) {
return prisma.module.create({
    data:{
        modCode:code,
        modName:name,
        creditUnit:parseInt(credit, 10)
    }
}).then(function (module) {
    return module;
}).catch(function (error) {
    if(error.code==="P2002"){
        throw new Error (`The module ${code} already exists`)
    }
    throw error;
// Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2002
});
};

module.exports.updateByCode=function updateByCode(code,credit){
    return prisma.module.update({
        where:{modCode:code},
        data:{creditUnit:parseInt(credit, 10)}
    }).then(function(module){
        return module;
    }).catch(function(error){
        if(error.code==="P2025"){
            throw new Error(`The module ${code} was not found`)
        }
        throw error;
    })
};

module.exports.deleteByCode = function deleteByCode(code) {
return prisma.module.delete({
    where:{ modCode:code}
}).then(function (module) {
    return module;
}).catch(function (error) {
    if(error.code==="P2025"){
        throw new Error(`The module ${code} was not found`)
    }
// Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2025
})
}
module.exports.retrieveAll=function retrieveAll(){
    return prisma.module.findMany();
}

module.exports.retrieveByCode = function retrieveByCode(code) {
    return prisma.module.findUnique({
        where: { modCode: code }
    }).then(function (module) {
        if (!module) {
            throw new Error(`The module ${code} was not found`);
        }
        return module;
    }).catch(function (error) {
        throw error;
    });
};

// impt 
// control space to know what is available in the prisma object
