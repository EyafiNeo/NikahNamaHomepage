
const feeFor4Lac = (mohor) => {
    const feePerthousand = 12.50;
    const feePercentage = (feePerthousand * 100) / 1000;
    const fee = (mohor * feePercentage)/100;
    return fee;
}

const feeForMoreThan4Lac = (mohor) => {
    const feePerLac = 100;
    const feePercentage = (feePerLac * 100) / 100000;
    const fee = (mohor * feePercentage)/100;
    return fee;
}

const feesOfKaji = (mohor) => {
    let totalFee;
    if (mohor > 400000) {
        const feesForMoreThan4Lac = feeForMoreThan4Lac(mohor - 400000);
        const feesFor4Lac = feeFor4Lac(400000);
        totalFee = feesFor4Lac + feesForMoreThan4Lac;
        return totalFee

    }
    else{
        totalFee = feeFor4Lac(mohor);
        if(totalFee < 200){
            totalFee = 200;
        }
        return totalFee;
    }
    
}

const mohor = feesOfKaji(60000000);
console.log(mohor);