const formatarId = (id: number | string): string => {
  if(typeof id === 'number') return `ID numérico: ${id}`;

  return `ID textual: ${id}`;
};

console.log(formatarId(123));
console.log(formatarId('ABC-123'));
console.log(formatarId(999));
console.log(formatarId('USER-01'));