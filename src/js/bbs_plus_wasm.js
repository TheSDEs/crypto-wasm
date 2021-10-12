const {
    wasm, initialize
} = require('./init_wasm');

const {
    throwErrorOnRejectedPromise
} = require('./util');

module.exports.generateBBSSigningKey = async (seed) => {
    await initialize();
    return throwErrorOnRejectedPromise(wasm.generateBBSSigningKey(seed));
};

module.exports.generateSignatureParamsG1 = async (messageCount, label) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateSignatureParamsG1(messageCount, label)
    );
};

module.exports.isSignatureParamsG1Valid = async (params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.isSignatureParamsG1Valid(params)
    );
};

module.exports.bbsSignatureParamsG1MaxSupportedMsgs = async (params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsSignatureParamsG1MaxSupportedMsgs(params)
    );
};

module.exports.generateSignatureParamsG2 = async (messageCount, label) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateSignatureParamsG2(messageCount, label)
    );
};

module.exports.isSignatureParamsG2Valid = async (params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.isSignatureParamsG2Valid(params)
    );
};

module.exports.bbsSignatureParamsG2MaxSupportedMsgs = async (params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsSignatureParamsG2MaxSupportedMsgs(params)
    );
};

module.exports.generateBBSPublicKeyG1 = async (secretKey, params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateBBSPublicKeyG1(secretKey, params)
    );
};

module.exports.isBBSPublicKeyG1Valid = async (publicKey) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.isBBSPublicKeyG1Valid(publicKey)
    );
};

module.exports.generateBBSPublicKeyG2 = async (secretKey, params) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateBBSPublicKeyG2(secretKey, params)
    );
};

module.exports.isBBSPublicKeyG2Valid = async (publicKey) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.isBBSPublicKeyG2Valid(publicKey)
    );
};

module.exports.generateBBSKeyPairG1 = async (params, seed) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateBBSKeyPairG1(params, seed)
    );
};

module.exports.generateBBSKeyPairG2 = async (params, seed) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateBBSKeyPairG2(params, seed)
    );
};

module.exports.bbsEncodeMessageForSigning = async (message) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsEncodeMessageForSigning(message)
    );
};

module.exports.bbsEncodeMessagesForSigning = async (messages, indicesToEncode) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsEncodeMessagesForSigning(messages, indicesToEncode)
    );
};

module.exports.bbsGetBasesForCommitmentG1 = async (params, indicesToCommit) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsGetBasesForCommitmentG1(params, indicesToCommit)
    );
};

module.exports.bbsGetBasesForCommitmentG2 = async (params, indicesToCommit) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsGetBasesForCommitmentG2(params, indicesToCommit)
    );
};

module.exports.bbsSignG1 = async (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsSignG1(messages, secretKey, params, encodeMessages)
    );
};

module.exports.bbsSignG2 = async (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsSignG2(messages, secretKey, params, encodeMessages)
    );
};

module.exports.bbsVerfiyG1 = async (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsVerfiyG1(messages, signature, publicKey, params, encodeMessages)
    );
};

module.exports.bbsVerfiyG2 = async (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsVerfiyG2(messages, signature, publicKey, params, encodeMessages)
    );
};

module.exports.bbsCommitMsgsInG1 = async (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsCommitMsgsInG1(messages, blinding, params, encodeMessages)
    );
};

module.exports.bbsCommitMsgsInG2 = async (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsCommitMsgsInG2(messages, blinding, params, encodeMessages)
    );
};

module.exports.bbsBlindSignG1 = async (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsBlindSignG1(commitment, uncommittedMessages, secretKey, params, encodeMessages)
    );
};

module.exports.bbsBlindSignG2 = async (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsBlindSignG2(commitment, uncommittedMessages, secretKey, params, encodeMessages)
    );
};

module.exports.bbsUnblindSigG1 = async (
    signature,
    blinding,
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsUnblindSigG1(signature, blinding)
    );
};

module.exports.bbsUnblindSigG2 = async (
    signature,
    blinding,
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsUnblindSigG2(signature, blinding)
    );
};

module.exports.bbsInitializeProofOfKnowledgeOfSignature = async (
    signature,
    params,
    messages,
    blindings,
    revealedIndices,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsInitializeProofOfKnowledgeOfSignature(signature, params, messages, blindings, revealedIndices, encodeMessages)
    );
};

module.exports.bbsGenProofOfKnowledgeOfSignature = async (
    protocol,
    challenge
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsGenProofOfKnowledgeOfSignature(protocol, challenge)
    );
};

module.exports.bbsVerifyProofOfKnowledgeOfSignature = async (
    proof,
    revealedMessages,
    challenge,
    publicKey,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsVerifyProofOfKnowledgeOfSignature(proof, revealedMessages, challenge, publicKey, params, encodeMessages)
    );
};

module.exports.bbsChallengeContributionFromProtocol = async (
    protocol,
    revealedMessages,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsChallengeContributionFromProtocol(protocol, revealedMessages, params, encodeMessages)
    );
};

module.exports.bbsChallengeContributionFromProof = async (
    proof,
    revealedMessages,
    params,
    encodeMessages
) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.bbsChallengeContributionFromProof(proof, revealedMessages, params, encodeMessages)
    );
};

module.exports.bbsExtendSigParamsG1ForMsgCount = async (params, generating_label, new_count) => {
    await initialize();
    return throwErrorOnRejectedPromise(wasm.bbsExtendSigParamsG1ForMsgCount(params, generating_label, new_count));
};

module.exports.bbsExtendSigParamsG2ForMsgCount = async (params, generating_label, new_count) => {
    await initialize();
    return throwErrorOnRejectedPromise(wasm.bbsExtendSigParamsG2ForMsgCount(params, generating_label, new_count));
};