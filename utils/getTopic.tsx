const getTopic = () => {
  const topics = ['React', 'Angular', 'Vue', 'Laravel', 'NextJs', 'mailgun', 'typeorm', 'Python', 'JWT', 'NestJs', 'AWS SDK']
  const indexTopic = Math.ceil(Math.random() * topics.length)

  return topics[indexTopic || 0];
}

export default getTopic;