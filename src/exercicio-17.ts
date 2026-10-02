const lancarErro = (msg: string): never => {
  throw new Error(msg);
};

lancarErro('Ocorreu um erro!');