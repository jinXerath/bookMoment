package com.bookMoment.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity
@SequenceGenerator(name = "user_generator", sequenceName = "user_seq", initialValue = 1, allocationSize = 1)
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userNo;

    @Column(nullable = false, length = 255)
    private String userEmail;
    
    @Column(nullable = false, length = 128)
    private String userPw;
    
    @Column(nullable = false, length = 60)
    private String userName;

    @Column(nullable = false, columnDefinition = "date default current_date")
    @Temporal(TemporalType.DATE)
    private Date userRegDate;
    
    @Column(nullable = false, columnDefinition = "date default current_date")
    @Temporal(TemporalType.DATE)
    private Date userDateWithdrawal;
    
    @Column(columnDefinition = "date default current_date")
    @Temporal(TemporalType.DATE)
    private Date userUpdateDate;

    @Column(nullable = false)
    private Byte userStatus;

    @Column(name = "USER_BEST_BOOK", columnDefinition = "TEXT")
    private String userBestBook;

    @Column(name = "USER_PROFILE_IMAGE", columnDefinition = "TEXT")
    private String userProfileImage;	
}
