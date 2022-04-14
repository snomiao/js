export function 求于<入型, 出型>(值: 入型, 函: (入: 入型) => 出型): 出型 {
  return 函(值);
}

// TODO 柯里化
