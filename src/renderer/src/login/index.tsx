'use client';

import * as React from 'react';
import { Button, FormControl, Input } from '@mui/joy';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { saveConfig } from '../../util';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen(): React.JSX.Element {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Todo call the backend to validate the token
    await saveConfig(id);
    navigate('bot');
  };

  return (
    <Stack
      spacing={6}
      paddingX="30px"
      height="90vh"
      justifyContent="center"
      boxShadow="initial"
    >
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="h5">Moxybot</Typography>
      </Stack>

      <Stack spacing={3}>
        <Stack spacing={2}>
          <Stack spacing={3}>
            <FormControl>
              <Input
                placeholder="organsation id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              >
                Email address
              </Input>
            </FormControl>

            <Button type="submit" onClick={handleSignIn}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
