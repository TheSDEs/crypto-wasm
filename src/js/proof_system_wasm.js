const {
    wasm, initialize
} = require('./init_wasm');

const {
    throwErrorOnRejectedPromise
} = require('./util');

module.exports.generatePoKBBSSignatureStatement = async (params, publicKey, revealedMessages, encodeMessages) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generatePoKBBSSignatureStatement(params, publicKey, revealedMessages, encodeMessages)
    );
};

module.exports.generateAccumulatorMembershipStatement = async (params, publicKey, provingKey, accumulated) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateAccumulatorMembershipStatement(params, publicKey, provingKey, accumulated)
    );
};

module.exports.generateAccumulatorNonMembershipStatement = async (params, publicKey, provingKey, accumulated) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateAccumulatorNonMembershipStatement(params, publicKey, provingKey, accumulated)
    );
};

module.exports.generatePedersenCommitmentG1Statement = async (bases, commitment) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generatePedersenCommitmentG1Statement(bases, commitment)
    );
};

module.exports.generatePedersenCommitmentG2Statement = async (bases, commitment) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generatePedersenCommitmentG2Statement(bases, commitment)
    );
};

module.exports.generateWitnessEqualityMetaStatement = async (equalities) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateWitnessEqualityMetaStatement(equalities)
    );
};

module.exports.generatePoKBBSSignatureWitness = async (signature, unrevealedMessages, encodeMessages) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generatePoKBBSSignatureWitness(signature, unrevealedMessages, encodeMessages)
    );
};

module.exports.generateAccumulatorMembershipWitness = async (element, witness) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateAccumulatorMembershipWitness(element, witness)
    );
};

module.exports.generateAccumulatorNonMembershipWitness = async (element, witness) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateAccumulatorNonMembershipWitness(element, witness)
    );
};

module.exports.generatePedersenCommitmentWitness = async (elements) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generatePedersenCommitmentWitness(elements)
    );
};

module.exports.generateProofSpec = async (statements, metaStatements, context) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateProofSpec(statements, metaStatements, context)
    );
};

module.exports.generateCompositeProof = async (proofSpec, witnesses, nonce) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateCompositeProof(proofSpec, witnesses, nonce)
    );
};

module.exports.verifyCompositeProof = async (proof, proofSpec, nonce) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.verifyCompositeProof(proof, proofSpec, nonce)
    );
};