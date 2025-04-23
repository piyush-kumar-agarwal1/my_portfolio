import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

// Certification Card Component
const CertificationCard = ({ index, title, issuer, issuerLogo, date, credentialId, credentialUrl, skills }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black-200 flex items-center justify-center">
                    <img
                        src={imgError ? "/placeholder-logo.png" : issuerLogo}
                        alt={issuer}
                        className="w-10 h-10 object-contain"
                        onError={() => setImgError(true)}
                    />
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px]">{issuer}</h3>
                    <p className="text-secondary text-[14px]">{date}</p>
                </div>
            </div>

            <h4 className="text-white font-semibold text-[16px] mb-3">{title}</h4>

            {skills && (
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="bg-black-200 text-white text-xs px-2 py-1 rounded"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            {credentialUrl && (
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-[#915EFF] hover:underline text-sm"
                >
                    View Credential
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            )}
        </motion.div>
    );
};

// Main Certifications Component - Simplified without categories
const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I've learned</p>
                <h2 className={styles.sectionHeadText}>Certifications.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I've completed various certifications to enhance my skills and keep up with the latest technologies.
                These credentials validate my expertise and demonstrate my commitment to continuous learning.
            </motion.p>

            {/* Grid of all certificates */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((certification, index) => (
                    <CertificationCard
                        key={certification.id}
                        index={index}
                        {...certification}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");