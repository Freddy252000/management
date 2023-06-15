import React from 'react'
import { Helmet } from "react-helmet-async";
// @mui
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Iconify from "../components/iconify";

// mock
import POSTS from "../_mock/blog";

const SORT_OPTIONS = [
    { value: "latest", label: "Latest" },
    { value: "popular", label: "Popular" },
    { value: "oldest", label: "Oldest" },
  ];
  export default function SalesReportPage() {
    return (
      <>
        <h1>SalesReportPage</h1>;
      </>
     
    );
  }
