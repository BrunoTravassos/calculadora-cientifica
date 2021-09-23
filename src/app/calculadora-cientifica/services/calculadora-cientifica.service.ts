/**
*Serviço responsavel por executar as operaçoes da CalculadoraCientificaService

*@autor Bruno Travassos<brunodefrontin@gmail.com>
*@since 1,0

*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraCientificaService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly ELEVADOQUADRADO: string = 'x2';
  static readonly ELEVADOCUBO: string = 'x3';
  static readonly QUADRADO: string = 'raiz';
  static readonly PI: string = 'pi';
  static readonly PORCENTAGEM: string = '%';


  constructor() { }
  /**
   *Metodo que calcula uma operação de dois numeros
   *suporta adição, subtração, multiplicação, divisão,
   *elevado ao quadrado, elevado ao cubo, raiz quadrada, e pi
   *
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string
   * @returns resultado da operacao
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraCientificaService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraCientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraCientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraCientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraCientificaService.ELEVADOQUADRADO:
        resultado = Math.pow(num1,2)
        break;
      case CalculadoraCientificaService.ELEVADOCUBO:
        resultado = Math.pow(num1, 3)
        break;
      case CalculadoraCientificaService.QUADRADO:
        resultado = Math.sqrt(num1)
        break;
      case CalculadoraCientificaService.PI:
        resultado = num1 * 3.14
        break;
      case CalculadoraCientificaService.PORCENTAGEM:
        resultado = num1 / 100
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
