import { AppLayout } from "@/components";
import { uploadScreen, validateHttpResponse } from "@/utils";
import {
  CardContent,
  Card,
  TextField,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errored, setErrored] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <AppLayout>
      <Card sx={{ mx: "auto", maxWidth: "500px" }}>
        <CardContent>
          <form
            onSubmit={handleSubmit(({ files, description }) => {
              if (loading) {
                return;
              }
              const formData = new FormData();
              formData.append(`files.data`, files[0], files[0]?.name);
              formData.append("data", JSON.stringify({ description }));
              setLoading(true);
              uploadScreen(formData)
                .then(validateHttpResponse)
                .then((v) => v.json())
                .then((v) => {
                  router.push(`/library/${v.data.id}`);
                })
                .catch(() => setErrored(true))
                .finally(() => setLoading(false));
            })}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                type="file"
                error={!!errors.files}
                InputProps={{
                  inputProps: {
                    accept: "image/*",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoImageOutline size="1.45rem" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& input::file-selector-button": {
                    display: "none",
                  },
                }}
                {...register("files", {
                  required: "Обязательное поле",
                })}
              />
              <TextField
                label="Description"
                multiline
                variant="outlined"
                error={!!errors.description}
                {...register("description", {
                  required: "Обязательное поле",
                })}
              />
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                color="primary"
                sx={{ ml: "auto" }}
              >
                Загрузить
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={errored}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        autoHideDuration={6000}
        onClose={() => setErrored(false)}
      >
        <Alert
          onClose={() => setErrored(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Произошла ошибка
        </Alert>
      </Snackbar>
    </AppLayout>
  );
}
