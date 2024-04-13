'use client'
import React, { useState } from 'react';
import TableDemo from '../table/table';
import Home from '../navbar/page';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import Image from "next/image"
import Link from 'next/link';

export default function Navbar() {
    const [batch, setBatch] = useState('');
    const [semester, setSemester] = useState('');

    const handleBatchChange = (event) => {
        setBatch(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Batch:', batch);
        console.log('Semester:', semester);
    };

    return (
        <>
            <nav className="bg-blue-500 p-6 shadow-md w-full flex justify-between items-center">
                <div style={{ marginTop: '5px' }}> {/* Increase margin-top for more space */}
                    <Link href="/">
                        <Image src="/assets/logo2.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto flex items-center w-full px-2 lg:px-8">

                    <h1 className="flex-shrink-0 mr-auto"> {/* Set margin right to auto to push the image to the left */}

                    </h1>
                    <div className="flex items-center space-x-4">
                        <Select>
                            <SelectTrigger className="w-full md:w-[200px] bg-white text-gray-800 rounded-md cursor-pointer">
                                <SelectValue placeholder="Select academic year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Academic Year</SelectLabel>
                                    <SelectItem value="2022-2023">2022-2026</SelectItem>
                                    <SelectItem value="2023-2024">2023-2027</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full md:w-[200px] bg-white text-gray-800 rounded-md cursor-pointer">
                                <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Semester</SelectLabel>
                                    <SelectItem value="Semester 1">Semester 1</SelectItem>
                                    <SelectItem value="Semester 2">Semester 2</SelectItem>
                                    <SelectItem value="Semester 3">Semester 3</SelectItem>
                                    <SelectItem value="Semester 4">Semester 4</SelectItem>
                                    <SelectItem value="Semester 5">Semester 5</SelectItem>
                                    <SelectItem value="Semester 6">Semester 6</SelectItem>
                                    <SelectItem value="Semester 7">Semester 7</SelectItem>
                                    <SelectItem value="Semester 8">Semester 8</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Button style={{ backgroundColor: '#1800f0', borderColor: '#1800f0' }} className="text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-150 ease-in-out">
                            Submit
                        </Button>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col md:flex-row gap-0">
                <Home />
                <TableDemo />
            </div>
        </>
    );
}
