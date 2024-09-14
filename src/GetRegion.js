import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

const GetRegion = () => {
  const [regionId, setRegionId] = useState(12321); // Example region_id
  const [regionName, setRegionName] = useState("abd"); // Example region_name
  const [regionData, setRegionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const response = await fetch(
          "https://admissioninnepal.in/api/add-region",
          {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },

            body: qs.stringify({ key: regionId,region_name:"hello" }),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Network response was not ok: ${response.statusText}"
          );
        }

        const data = await response.json();
        console.log(data);

        setRegionData(data.data);
      } catch (error) {
        console.error("Failed to fetch region data:", error);
      }
    };

    fetchRegionData();
  }, []);

  return (
    <div>
      <h1>Region Data</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : regionData ? (
        <pre>{JSON.stringify(regionData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetRegion;
