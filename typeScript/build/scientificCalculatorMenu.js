"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const addition_1 = require("./basicOperations/addition");
const subtraction_1 = require("./basicOperations/subtraction");
const multiplication_1 = require("./basicOperations/multiplication");
const division_1 = require("./basicOperations/division");
const quadraticFunction_1 = require("./specialOperations/quadraticFunction");
const compoundInterest_1 = require("./interest/compoundInterest");
const simpleInterest_1 = require("./interest/simpleInterest");
const fatorial_1 = require("./specialOperations/fatorial");
exports.prompt = (0, prompt_sync_1.default)();
let opcao;
do {
    console.clear();
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(":                CALCULADORA CIENTIFICA                :");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log();
    console.log("Digite a função que deseja utilizar:");
    console.log();
    console.log("[1] SOMA");
    console.log("[2] SUBTRAÇÃO");
    console.log("[3] MULTIPLICAÇÃO");
    console.log("[4] DIVISÃO");
    console.log("[5] FATORIAL");
    console.log("[6] FUNCAO DE SEGUNDO GRAU");
    console.log("[7] CALCULO DE JUROS");
    console.log("[8] SAIR");
    console.log();
    opcao = (0, exports.prompt)("Opção desejada: ");
    switch (opcao) {
        case "1":
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case "2":
            do {
                (0, subtraction_1.subtraction)();
            } while (repetirOperacao());
            break;
        case "3":
            do {
                (0, multiplication_1.multiplicacao)();
            } while (repetirOperacao());
            break;
        case "4":
            do {
                (0, division_1.divisao)();
            } while (repetirOperacao());
            break;
        case "5":
            do {
                (0, fatorial_1.fatorial)();
            } while (repetirOperacao());
            break;
        case "6":
            do {
                (0, quadraticFunction_1.funcaoSegundoGrau)();
            } while (repetirOperacao());
            break;
        case "7":
            do {
                selecionarTipoJuros();
            } while (repetirOperacao());
            break;
        case "8":
            console.log("PROGRAMA ENCERRADO!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
    if (opcao !== "8") {
        (0, exports.prompt)("Pressione Enter para continuar...");
    }
} while (opcao !== "8");
function repetirOperacao() {
    console.log();
    const resposta = (0, exports.prompt)("Deseja repetir a mesma operação? (S/N): ");
    console.log();
    return resposta.toUpperCase() === "S";
}
function selecionarTipoJuros() {
    console.clear();
    console.log("======= CALCULO DE JUROS =======");
    console.log("");
    console.log("Qual funcao deseja utilizar?");
    console.log("1 <- Juros Simples");
    console.log("2 <- Juros Compostos");
    console.log("");
    const resposta = (0, exports.prompt)("Digite a sua resposta: ");
    switch (resposta) {
        case "1":
            (0, simpleInterest_1.simpleInterest)();
            break;
        case "2":
            (0, compoundInterest_1.compountInterest)();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}
