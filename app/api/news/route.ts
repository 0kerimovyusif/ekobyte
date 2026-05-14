// src/app/api/news/route.ts

import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category") || "technology";
  const searchQuery = searchParams.get("search");
  const page = searchParams.get("page") || "1";
  const max = searchParams.get("max") || "9";

  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key tapılmadı" },
      { status: 500 }
    );
  }

  let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=${max}&page=${page}&apikey=${apiKey}`;

  if (searchQuery) {
    url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&max=${max}&page=${page}&apikey=${apiKey}`;
  }

  try {
    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("News API error:", error);

    return NextResponse.json(
      { error: "Xəbərlər yüklənmədi" },
      { status: 500 }
    );
  }
}
