const TimelineContent = ({ description, title, subTitle }) => {
  return (
    <div>
      <p className=" -ml-5 text-2xl font-bold">
        {title}
      </p>            
      <p className="mb-5 -ml-5 text-lg text-gray-400">
        {subTitle}
      </p>            
      <ul className="list-disc list-outside space-y-2">
        {description.map((text, index) => (
          <li
            key={`${text}-${index}`}
            className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 text-justify"
          >
            {text}
          </li>
        ))}
      </ul>

    </div>
  );
};

export const TimelineData = [
  {
    id: "2024",
    title: "2024",
    content: (
      <TimelineContent
        title="Magang di Bappeda"
        subTitle="03/2024 - 07/2024"
        description={[
          "Bekerja secara tim dalam mengumpulkan dan menyusun informasi terkait inovasi dari Organisasi Perangkat Daerah (OPD) yang terdata di Bappeda",
          " Berkontribusi dalam pengembangan website untuk mendigitalisasi inovasi OPD yang sebelumnya masih bersifat non-digital, guna meningkatkan aksesibilitas dan dokumentasi inovasi daerah.",                    
        ]}
      />
    ),
  },
];

export const EducationData = [
  {
    id: "2021",
    title: "2021",
    content: (
      <TimelineContent
        title="Institut Widya Pratama Pekalongan"
        subTitle="10/2021 - 01/2025"
        description={[
          "Teknik Informatika - 3,78",          
        ]}
      />
    ),
  },
  {
    id: "2018",
    title: "2018",
    content: (
      <TimelineContent
        title="Man 1 Kota Pekalongan"
        subTitle="10/2021 - 01/2025"
        description={[
          "IPA",          
        ]}
      />
    ),
  },
];
