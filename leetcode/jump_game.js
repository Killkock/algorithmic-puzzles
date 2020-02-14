function canJump(nums) {
  let stock = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    stock = Math.max(nums[i], stock);

    if (!stock) {
      return false;
    }

    stock--;
  }

  return true;
}
