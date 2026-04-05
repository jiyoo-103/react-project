import { Box, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return phoneBook;
    return phoneBook.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
  }, [phoneBook, search]);

  return (
    <Box sx={{ textAlign: 'left', maxWidth: 420, mx: 'auto' }}>
      <TextField
        fullWidth
        label="이름으로 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
        size="small"
      />

      <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2, mb: 1 }}>
        연락처 목록 ({filtered.length}
        {search.trim() ? ` / 전체 ${phoneBook.length}` : ''})
      </Typography>

      {phoneBook.length === 0 && (
        <Typography color="text.secondary">등록된 연락처가 없습니다.</Typography>
      )}

      {phoneBook.length > 0 && filtered.length === 0 && (
        <Typography color="text.secondary">검색 결과가 없습니다.</Typography>
      )}

      <Stack spacing={1.5} sx={{ mt: 1 }}>
        {filtered.map((item) => (
          <Paper key={item.id} variant="outlined" sx={{ p: 2 }}>
            <Typography fontWeight={600}>{item.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.phoneNumber}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default ContactList;
