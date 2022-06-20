import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import NumberField from '../../../components/number-field';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { createModifyCartItemActionThunk } from '../../../store/action-creators';
import { selectCartItemAmountByProductId } from '../../../store/selectors';

type ShopPageCardActionsProps = {
  id: string,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
}) => {
  const dispatch = useRootDispatch();
  const cartItemAmount = useRootSelector(selectCartItemAmountByProductId(id));
  const [amount, setAmount] = useState<number>(cartItemAmount);

  const modifyCartItem = (): void => {
    const modifyCartItemAction = createModifyCartItemActionThunk(id, amount);
    dispatch(modifyCartItemAction);
  };

  useEffect(() => {
    if (cartItemAmount !== amount) {
      modifyCartItem();
    }
  }, [amount]);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        gap: 0.5,
      }}
      >
        <NumberField
          size="small"
          sx={{ alignSelf: 'stretch' }}
          InputProps={{ sx: { height: '100%' } }}
          min={0}
          value={cartItemAmount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
