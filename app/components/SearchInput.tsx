"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "../hooks/useDebounce";
import Input from "./Input";


const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500); //Setting the value of the user input

  useEffect(() => {
    const query = {
      title: debouncedValue, // Giving the deboundedValue from the user in the title
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query:query
    });
    router.push(url);
  }, [debouncedValue, router]);

  return ( 
    <>
    <Input
    type="search"
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    </>
  );
}
 
export default SearchInput;