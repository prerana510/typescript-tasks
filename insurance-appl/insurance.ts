
interface InsurancePolicy {
    age: number;
    healthStatus: 'excellent' | 'good' | 'average' | 'poor';
    coverageAmount: number;
}


function calculatePremium(policy: InsurancePolicy): number {
    let basePremium = 100; 

    if (policy.age < 25) {
        basePremium += 50; 
    } else if (policy.age > 50) {
        basePremium += 30; 
    }
    switch (policy.healthStatus) {
        case 'excellent':
            basePremium -= 20; 
            break;
        case 'good':
            break; 
        case 'average':
            basePremium += 20; 
            break;
        case 'poor':
            basePremium += 50; 
            break;
    }

    if (policy.coverageAmount > 100000) {
        basePremium += (policy.coverageAmount - 100000) * 0.001; 
    }

    return basePremium;
}

const policy: InsurancePolicy = {
    age: 30,
    healthStatus: 'good',
    coverageAmount: 150000,
};

const premium = calculatePremium(policy);
console.log(`The calculated insurance premium is: $${premium.toFixed(2)}`);
