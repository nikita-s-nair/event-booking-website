import axios from "axios";
export const getAllMovies = async () => {
  const res = await axios.get("events/")
  .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
};

export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};

export const sendAdminAuthRequest = async (data) => {
  const res = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpectyed Error");
  }

  const resData = await res.data;
  return resData;
};

export const getEventDetails = async (id) => {
  const res = await axios.get(`http://localhost:5000/events/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const newBooking = async (data) => {
  const res = await axios
    .post("http://localhost:5000/booking", {
      eventType: data.event.eventType,
      eventTitle: data.event.title,
      tickets: data.tickets,
      eventDate: data.event.eventDate,
      user: data.user
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios
    .get(`/user/bookings/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const deleteBooking = async (id) => {
  const res = await axios
    .delete(`/booking/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unepxected Error");
  }

  const resData = await res.data;
  return resData;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const addMovie = async (data) => {
  const res = await axios
    .post(
      "/movie",
      {
        title: data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        fetaured: data.fetaured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};

export const getAdminById = async () => {
  const adminId = localStorage.getItem("adminId");
  const res = await axios
    .get(`/admin/${adminId}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};