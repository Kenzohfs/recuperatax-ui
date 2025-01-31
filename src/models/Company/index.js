export class CompanyModel {
  constructor() {
    this.cnpj = '';
    this.name = '';
    this.fantasyName = '';
    this.contact = '';
    this.email = '';
    this.cep = '';
    this.country = '';
    this.state = '';
    this.city = '';
    this.neighborhood = '';
    this.street = '';
    this.number = '';
    this.complement = '';
  }

  isCNPJValid(cnpj) {
    cnpj = cnpj.replace(/\D/g, '');

    if (cnpj.length !== 14) return false;

    // CNPJ inválidos
    if (/^(\d)\1{13}$/.test(cnpj)) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) return false;

    return true;
  }

  validateFields(company) {
    const errors = [];

    if (!company.cnpj) {
      errors.push('CNPJ inválido');
    }

    if (company.cnpj && !this.isCNPJValid(company.cnpj)) {
      errors.push('CNPJ inválido');
    }

    if (!company.name) {
      errors.push('Nome inválido');
    }

    if (!company.fantasyName) {
      errors.push('Nome fantasia inválido');
    }

    if (!company.contact) {
      errors.push('Contato inválido');
    }

    if (!company.email) {
      errors.push('Email inválido');
    }

    if (!company.cep) {
      errors.push('CEP inválido');
    }

    if (!company.country) {
      errors.push('País inválido');
    }

    if (!company.state) {
      errors.push('Estado inválido');
    }

    if (!company.city) {
      errors.push('Cidade inválida');
    }

    if (!company.neighborhood) {
      errors.push('Bairro inválido');
    }

    if (!company.street) {
      errors.push('Rua inválida');
    }

    if (!company.number) {
      errors.push('Número inválido');
    }

    return errors;
  }
}
