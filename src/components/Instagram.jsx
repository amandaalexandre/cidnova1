import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function Instagram() {

  async function feedInstagram() {
    const token = import.meta.env.VITE_INSTA_TOKEN;
    const fields = "media_url,media_type,permalink"
    const url = `https://graph.instagram.com/me/profile?access_token=${token}&fields=${fields}`

    const {data} = await axios.get(url);
    console.log(data)
  }

  useEffect(() => {
    feedInstagram();
  }, [])

  return (
      <div>

      </div>

  )
}

export default Instagram