export function formatData(value: string) {
  return value.replace(/\D/g, "").replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
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
