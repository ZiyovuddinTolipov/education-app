/* eslint-disable react/prop-types */

const ProfileInfo = ({ user }) => {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <p className="text-sm text-text-light dark:text-text-dark"><strong className="text-primary-light dark:text-primary-dark">Email:</strong> {user.email}</p>
                <p className="text-sm text-text-light dark:text-text-dark"><strong className="text-primary-light dark:text-primary-dark">Telefon:</strong> {user.phone}</p>
                <p className="text-sm text-text-light dark:text-text-dark"><strong className="text-primary-light dark:text-primary-dark">Lavozim:</strong> {user.position}</p>
                <p className="text-sm text-text-light dark:text-text-dark"><strong className="text-primary-light dark:text-primary-dark">Fan:</strong> {user.subject}</p>
                <p className="text-sm text-text-light dark:text-text-dark"><strong className="text-primary-light dark:text-primary-dark">Tajriba:</strong> {user.experience}</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Ta&apos;lim</h3>
                {user.education.map((edu, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-sm text-text-light dark:text-text-dark"><strong>{edu.degree}</strong> - {edu.field}</p>
                        <p className="text-sm text-text-light dark:text-text-dark">{edu.institution}, {edu.year}</p>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Nashrlar</h3>
                {user.publications.map((pub, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-sm text-text-light dark:text-text-dark"><strong>{pub.title}</strong></p>
                        <p className="text-sm text-text-light dark:text-text-dark">{pub.journal}, {pub.year}</p>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">O&apos;qitiladigan fanlar</h3>
                <ul className="list-disc list-inside">
                    {user.courses.map((course, index) => (
                        <li key={index} className="text-sm text-text-light dark:text-text-dark">{course}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Ko&apos;nikmalar</h3>
                <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                        <span key={index} className="text-sm bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark px-2 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Tillar</h3>
                {user.languages.map((lang, index) => (
                    <p key={index} className="text-sm text-text-light dark:text-text-dark"><strong>{lang.language}:</strong> {lang.level}</p>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Mukofotlar</h3>
                {user.awards.map((award, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-sm text-text-light dark:text-text-dark"><strong>{award.title}</strong>, {award.year}</p>
                        <p className="text-sm text-text-light dark:text-text-dark">{award.organization}</p>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Loyihalar</h3>
                {user.projects.map((project, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-sm text-text-light dark:text-text-dark"><strong>{project.title}</strong></p>
                        <p className="text-sm text-text-light dark:text-text-dark">{project.role}, {project.year}</p>
                        <p className="text-sm text-text-light dark:text-text-dark">{project.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Ijtimoiy tarmoqlar</h3>
                <div className="space-y-1">
                    <p className="text-sm text-text-light dark:text-text-dark">
                        <a href={user.socialMedia.linkedin} className="text-primary-light dark:text-primary-dark hover:underline">LinkedIn</a>
                    </p>
                    <p className="text-sm text-text-light dark:text-text-dark">
                        <a href={user.socialMedia.researchGate} className="text-primary-light dark:text-primary-dark hover:underline">ResearchGate</a>
                    </p>
                    <p className="text-sm text-text-light dark:text-text-dark">
                        <a href={user.socialMedia.googleScholar} className="text-primary-light dark:text-primary-dark hover:underline">Google Scholar</a>
                    </p>
                </div>
            </div>

            {user.bio && (
                <div>
                    <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">Bio</h3>
                    <p className="text-sm text-text-light dark:text-text-dark">{user.bio}</p>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
