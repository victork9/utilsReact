export function maskDate(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1');
}
export function formatTimer(value: string) {
  return value.replace(/\D/g, "").replace(/(\d{2})(\d{2})/, "$1:$2");
}

export function formatCpf(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function maskCnpj(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,4})/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2');
}

export function maskPhone(value: string): string {
  const variablePhones = (valuePhone: string) => {
    return valuePhone.replace(valuePhone.length > 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
  };

  const newValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1 $2');

  return variablePhones(newValue);
}
